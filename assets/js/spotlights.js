    


    var masonry = new Macy({
        container: '.wall',
        trueOrder: false,
        waitForImages: false,
        debug: true,
        margin: {
            x: 0,
            y: 0
        },
        columns: 2,
        breakAt: {
          991: {
            columns: 3,
            margin: {
                x: 20,
                y: 20
            }
          },
          767: {
            columns: 1,
            margin: {
                x: 20,
                y: 10
            }
          }
        }
      });

    masonry.recalculate();