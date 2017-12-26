<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\InfoTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\InfoTable Test Case
 */
class InfoTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\InfoTable
     */
    public $Info;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.info'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Info') ? [] : ['className' => InfoTable::class];
        $this->Info = TableRegistry::get('Info', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Info);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
