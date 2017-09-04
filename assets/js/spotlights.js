    


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
          900: {
            columns: 1,
            margin: {
                x: 0,
                y: 0
            }
          }
         
        }
      });

    masonry.recalculate();