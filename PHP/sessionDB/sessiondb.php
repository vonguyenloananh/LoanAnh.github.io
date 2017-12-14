<?php
	class sessiondb {
		private $db;
		
		/*
		 * construct of class
		 */
		function __construct() {
			//set custom session functions.
			session_set_save_handler(array($this, 'open'), array($this, 'close'), array($this, 'read'), array($this, 'write'), array($this, 'destroy'), array($this, 'gc'));
			register_shutdown_function('session_write_close');
		}

		/*
		 *  start session
		 *  @param $session_name: name of session
		 *  @param $secure is true if use https
		 */
		function start_session($session_name, $secure) {
			//check the session cookie isn't accessable via js
			$httponly = true;

			//get a list of avaible hashes
			$session_hash = 'sha512';

			//check if hash is available
			if (in_array($session_hash, hash_algos())) {
				//set the has function
				ini_set('session.hash_function', $session_hash);
				ini_set('session.hash_bits_per_character', 5);

				//force the session use cookie, not URL variable
				ini_set('session.use_only_cookie', 1);

				//get session cookie param
				$cookieParams = session_get_cookie_params();

				//set the param
				session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], $secure, $httponly);

				//change the session name
				session_name($session_name);

				//start session
				session_start();

				//session_regenerate_id(true);
			}
		}

		/*
		 * Opening the session data store
		 */
		function open() {
			$host = "localhost";
			$user = "root";
			$pass = "";
			$name_db = "sessiondb";
			$mysqli = new mysqli($host, $user, $pass, $name_db);
			$this->db = $mysqli;
			return true;
		}

		/*
		 *Closing the session data store
		 */
		function close() {
			$this->db->close();
			return true;
		}

		/*
		 * Reading session data
		 * @param $id: is string content session id
		 * @return: data of session
		 */
		function read($id) {
			if(!isset($this->read_stmt)) {
		      	$this->read_stmt = $this->db->prepare("SELECT data FROM sessions WHERE id = ? LIMIT 1");
		   	}

			$this->read_stmt->bind_param('s', $id);
			$this->read_stmt->execute();
		    $this->read_stmt->store_result();
		    $this->read_stmt->bind_result($data);
		    $this->read_stmt->fetch();
		    $key = $this->getkey($id);
		    $data = $this->decrypt($data, $key);
		    return $data;
		}

		/*
		 *Writing session data
		 *encrypt the data
		 *@param $id: is id of session
		 *@param $data: is data of session
		 *return: boolean
		 */
		function write($id, $data) {
			//get key
			$key = $this->getkey($id);

			//encrypt the data
			$data = $this->encrypt($data, $key);

			//get current time.
			$time = time();

			if (!isset($this->w_stmt)) {
				$sql = "REPLACE INTO sessions (id, set_time, data, session_key) VALUES (?, ?, ?, ?)";
				$this->w_stmt = $this->db->prepare($sql);
			}

			//options: s: string, i: integer
			$this->w_stmt->bind_param('siss', $id, $time, $data, $key);
			if ($this->w_stmt->execute()) {
				return true;
			}
			return false;
		}

		/*
		 * get key from session table to encrypt data. If key not found, create new random key
		 * @param $id: is string id of session
		 * return the key
		 */
		function getkey($id) {
			if (!isset($this->key_stmt)) {
				$sql_getKey = "SELECT session_key FROM sessions WHERE id = ? LIMIT 1";

				$this->key_stmt = $this->db->prepare($sql_getKey);
			}

			//Binds variables to a prepared statement
			$this->key_stmt->bind_param('s', $id);
			$this->key_stmt->execute();
			$this->key_stmt->store_result();

			if ($this->key_stmt->num_rows === 1) {
				$this->key_stmt->bind_result($key);
				$this->key_stmt->fetch();
				return $key;
			} else {
				$rd_key = hash('sha512', uniqid(mt_rand(1, mt_getrandmax()), true));
				return $rd_key;
			}
		}

		/*
		 *Destroying all session data
		 *@param $id: is string
		 */
		function destroy($id) {
			if (!isset($this->delete_stmt)) {
				$sql_del = "DELETE FROM sessions WHERE id = ?";
				$this->delete_stmt = $this->db->prepare($sql_del);
				$this->delete_stmt->execute();
				return true;
			}
		}

		/*
		 *Cleaning out old session data	
		 */	
		function gc($max) {
		   if(!isset($this->gc_stmt)) {
		      $this->gc_stmt = $this->db->prepare("DELETE FROM sessions WHERE set_time < ?");
		   }
		   $old = time() - $max;
		   $this->gc_stmt->bind_param('s', $old);
		   $this->gc_stmt->execute();
		   return true;
		}

		/*
		 * encrypt the data with key
		 * @param string $data: data of session
		 * @param string $key: key use encrypt
		 * return: data
		 */
		function encrypt($data, $key) {
		    $salt = 'cH!swe!retReGu7W6bEDRup7usuDUh9THeD2CHeGE*ewr4n39=E@rAsp7c-Ph@pH';
		    $key = substr(hash('sha256', $salt.$key.$salt), 0, 32);
		    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
		    $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
		    $encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, $key, $data, MCRYPT_MODE_ECB, $iv));
		    return $encrypted;
		}

		/*
		 * decrypt the data with key
		 * @param string $data
	     * @param string $key: key was used encrypt
		 * return: data
		 */
		function decrypt($data, $key) {
		    $salt = 'cH!swe!retReGu7W6bEDRup7usuDUh9THeD2CHeGE*ewr4n39=E@rAsp7c-Ph@pH';
		    $key = substr(hash('sha256', $salt.$key.$salt), 0, 32);
		    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
		    $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
		    $decrypted = mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $key, base64_decode($data), MCRYPT_MODE_ECB, $iv);
		    return $decrypted;
		}

	}		
?>