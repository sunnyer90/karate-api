

function() {   
  var env = karate.env; // get java system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev'; // a custom 'intelligent' default
  }
  var config = { // base config JSON
    identityAssertions: 'http://myhost.com/v1/cats',
  };
  if (env == 'stage') {
    // over-ride only those that need to be
    config.identityAssertions = '';
  } else if (env == 'e2e') {
    config.identityAssertions = '';
  }
  // don't waste time waiting for a connection or if servers don't respond within 5 seconds
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);
  return config;
}