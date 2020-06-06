let sandwich = {
    bread: 'integral',
    cheese: 'white',

    prepare: function () {
        return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
    },

    make: function () {
        let that = this;
        console.log(that.prepare());
    }

};

sandwich.make();
