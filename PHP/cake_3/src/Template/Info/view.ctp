<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Info $info
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit Info'), ['action' => 'edit', $info->id]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete Info'), ['action' => 'delete', $info->id], ['confirm' => __('Are you sure you want to delete # {0}?', $info->id)]) ?> </li>
        <li><?= $this->Html->link(__('List Info'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Info'), ['action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="info view large-9 medium-8 columns content">
    <h3><?= h($info->id) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Tag') ?></th>
            <td><?= $this->Number->format($info->tag) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Prices') ?></th>
            <td><?= $this->Number->format($info->prices) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($info->id) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($info->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Modified') ?></th>
            <td><?= h($info->modified) ?></td>
        </tr>
    </table>
</div>
