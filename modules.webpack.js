var context = require.context('./src', true, /\.module\.js$/);
context.keys().forEach(context);