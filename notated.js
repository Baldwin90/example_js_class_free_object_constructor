// Pass in an object literal so you can basically have named arguments
/*
 * Extract the values passed in with the object and assign them accordingly.
 * This example sets _var3 with a default value of 6.
 */
function objFactory({var1, _var2, _var3 = 6}) {
    /* 
     * Call any important constructors and extract only the contextually
     * important members and methods. This allows for multiple inheritance
     * if you decide you need to pull from multiple constructors (we are
     * only using the one below for this example).
     */
    const { mixin2: _mixin2, var1: otherVar1 } = anotherObjFactory({
        foo: 1,
        bar: 2,
    });

    /*
     * Create all other necessary local variables. Make sure all functions
     * are labeled const.
     */
    let _var4;
    let _var5;
    const NAME = 'Rorschach';
    
    const addVar3 = function (value) {
        return (value + _var3);
    };
    
    /*
     * Pass an object literal into Object.freeze so the resulting
     * object cannot have its inteface modified. This is the
     * object that will be returned from this factory.
     *
     * The object being passed in will contain the variables
     * and methods you wish to make public. Everthing that
     * is not contained in the object literal will be private.
     *
     * As for the private variables, they all begin with an underscore "_"
     * to tell YOU that they are private. Simply placing the underscore
     * at the beginning does NOT make it private, it's a style choice.
     * This also means that you have to be very deliberate when changing
     * a variable from public to private and vice versa. Your object literal
     * should NEVER have a variable starting with an underscore.
     */
    return Object.freeze({
        var1,
        otherVar1,
        addVar3,
        NAME,
    });
}

/*
 * This is an example factory that is used for mixing into the
 * above factory. Note that NAME and var1 both clash with the
 * name-space of the factory calling it; however, any conflicting
 * variable names can be changed by the factory calling it, so
 * you won't have to sacrifice pulling that information from
 * this factory.
 */
function anotherObjFactory({foo: _mixin1, bar: mixin2}) {
    let _minxin3;
    let var1 = 1;
    const NAME = 'Bob';
    
    const _mixinMethod = function (value) {
        return (value + var1);
    };
    
    return Object.freeze({
        mixin2,
        var1,
        NAME,
    });
}


let newObj = objFactory({
    example2: 2,
    example1: 1,
});

console.log(newObj.NAME);
