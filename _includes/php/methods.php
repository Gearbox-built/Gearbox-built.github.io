<?php

// Good
bar();
$foo->bar($arg1);
Foo::bar($arg2, $arg3);

// Good
$foo->bar(
    $longArgument,
    $longerArgument,
    $muchLongerArgument
);