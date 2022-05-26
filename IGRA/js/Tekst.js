class Tekst {
    constructor(ctx, x, y, string, style, origin) {

        this.ctx = ctx;

        this.x = x;

        this.y = y;
        this.text = string;

        this.style = this.initStyle(style);

        this.origin = this.initOrigin(origin);

        this.obj = this.createTekst();



    }

    initStyle(key) {

        let style = {

            fontFamily: 'font',

            fontSize: 16,


            color: '#FF0000',
            align: 'center'


        }

        switch (key.toLowerCase()) {


            case 'title':

                style.fontSize = 32;
                break;

            case 'preload':
                style.fontSize = 24;

                break;

        }

        return style;



    }
    initOrigin(origin) {
        if (typeof origin === 'number') {
            return {
                x: origin,
                y: origin
            };


        }
        else if (typeof origin === 'object'
        ) {
            return origin;
        }



        else {
            return {
                x: 0.5,
                y: 0.5
            };
        }


    }



    createTekst() {
        let obj = this.ctx.add.bitmapText(
            this.x,
            this.y,
            this.style.fontFamily,
            this.text,
            this.style.fontSize,
            this.style.align
        );

        obj.setOrigin(this.origin.x, this.origin.y);

        return obj;





    }

    destroy() {
        this.obj.destroy();
        this.obj = false;



    }
}


