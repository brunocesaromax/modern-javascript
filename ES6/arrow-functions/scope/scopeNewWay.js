let newSandwich = {
    bread: 'integral',
    cheese: 'white',

    prepare: function() {
        return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
    },

    make: function() {
        console.log(this.prepare());
    }

};

newSandwich.make();
