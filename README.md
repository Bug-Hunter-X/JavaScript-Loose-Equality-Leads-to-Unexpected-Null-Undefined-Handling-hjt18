# JavaScript Loose Equality Bug

This repository demonstrates a common error in JavaScript related to loose equality (==) when dealing with null and undefined values.

## The Bug

The `foo` function attempts to handle null input by returning 0. However, due to loose equality, `null == undefined` evaluates to true. This leads to unexpected behavior when the function is called with `undefined`, resulting in `NaN` instead of the expected 0.

## The Solution

The solution uses strict equality (===) to explicitly check for null or undefined values, which prevents the unexpected behavior and ensures accurate handling.