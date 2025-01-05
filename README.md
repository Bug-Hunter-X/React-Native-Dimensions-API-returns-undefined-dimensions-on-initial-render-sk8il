# React Native Dimensions API Undefined Dimensions Bug

This repository demonstrates a common bug in React Native when using the `Dimensions` API to retrieve screen dimensions.  The problem arises because the dimensions might not be immediately available when the component initially renders. Attempting to access the dimensions before they are ready results in undefined values, potentially causing layout problems or application crashes.

## Bug Description
The bug is reproduced when accessing `Dimensions.get('window')` or `Dimensions.get('screen')` within the component's initial render. This typically leads to unexpected behavior, such as incorrect layout calculations or the rendering of undefined values. 

## Solution
The solution involves using the `useEffect` hook to ensure that the dimensions are retrieved after the component mounts. This guarantees that the `Dimensions` API has had sufficient time to populate the dimension values. 