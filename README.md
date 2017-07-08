# voting-client

FYI:
After reading similar issues, it appears that with "webpack": "^2.2.1" and "webpack-dev-server": "^1.16.3", the loader should read 'react-hot-loader!babel-loader' and resolve extensions should read "['*', '.js', '.jsx']" instead of blank for the first extension.