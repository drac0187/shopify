
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.86d019fc6591c2bb0d4b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/625.latest.en.dea994516b39bcffb53c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/833.latest.en.a2162f9fe5f73ac295e2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.latest.en.a0e89e7f48a228f9681f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.33e18d4e2a8abf897bc3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.en.c93e6a6b8624ef406214.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.54d8b34024818cafec9f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/125.latest.en.efaf89d2a0b0b5dbc0ba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.en.313e243f59663328b7ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.c512889414a4d679ae76.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/625.latest.en.92713c61e5ec653ca0bf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5e52d9ec000e6dcd2cd6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.6e0fd6af0121f716b925.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.325d738aa19c62d3f630.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0568/4654/9076/files/Screenshot_2024-03-06_at_12.43.17_PM_x320.png?v=1709750623"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  