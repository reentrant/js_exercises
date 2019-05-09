/*
 * Proxies are a powerful new way to create and manage the interactions between objects.
 * With ES6 Proxies, we do not need to know the properties beforehand.
 * The key to making Proxies useful is the handler object that's passed as the second object to the
 * Proxy constructor. The handler object is made up of a methods that will be used for property
 * access.
 * The handler object is made up of 1 of 13 different "traps".
 * A trap is a function that will intercept calls to properties let you run code.
 * If a trap is not defined, the default behavior is sent to the target object.
 * Let's look at the get:
 */
{
  /*
   * 1) the get trap will take over whenever any property on the proxy is accessed.
   */
  const richard = {status: 'looking for work'};
  const handler = {
      get(target, propName) {
          console.log(target);
          console.log(propName);
          return target[propName];
      }
  };

  // A Pass Through Proxy
  const agent = new Proxy(richard, handler);
  agent.status;  // get: The get trap is used to "intercept" calls to properties
}


{
  /*
   * 2) If we want to intercept calls to change properties, then the set trap needs to be used!
   */

  const richard = {status: 'looking for work'};
  const handler = {
      set(target, propName, value) {
          if (propName === 'payRate') { // if the pay is being set, take 15% as commission
              value = value * 0.85;
          }
          target[propName] = value;
      }
  };
  const agent = new Proxy(richard, handler);
  agent.payRate = 1000; // set the actor's pay to $1,000
  agent.payRate; // $850 the actor's actual pay
}

/*
Other Traps
So we've looked at the get and set traps (which are probably the ones you'll use most often), but
there are actually a total of 13 different traps that can be used in a handler!

the get trap - lets the proxy handle calls to property access
the set trap - lets the proxy handle setting the property to a new value
the apply trap - lets the proxy handle being invoked (the object being proxied is a function)
the has trap - lets the proxy handle the using in operator
the deleteProperty trap - lets the proxy handle if a property is deleted
the ownKeys trap - lets the proxy handle when all keys are requested
the construct trap - lets the proxy handle when the proxy is used with the new keyword as a constructor
the defineProperty trap - lets the proxy handle when defineProperty is used to create a new property on the object
the getOwnPropertyDescriptor trap - lets the proxy handle getting the property's descriptors
the preventExtenions trap - lets the proxy handle calls to Object.preventExtensions() on the proxy object
the isExtensible trap - lets the proxy handle calls to Object.isExtensible on the proxy object
the getPrototypeOf trap - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
the setPrototypeOf trap - lets the proxy handle calls to Object.setPrototypeOf on the proxy object

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/
*/
