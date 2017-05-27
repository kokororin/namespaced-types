# Namespaced Types
[![npm version](https://badge.fury.io/js/namespaced-types.svg)](https://badge.fury.io/js/namespaced-types)

## Install
```bash
npm install namespaced-types
```

## Usage
```javascript
import createTypes from 'namespaced-types';

const types = createTypes('counter', [
  'INCREASE',
  'DECREASE'
]);
```

This would produce following object: 

```
{
	INCREASE: 'counter/INCREASE',
	DECREASE: 'counter/DECREASE'
}
```

You can pass the third argument to change the default divider string '/'.