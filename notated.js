// Pass in an object literal so you can basically have named arguments
function objFactory(spec) {
    /* 
     * Call any important constructors and extract only the contextually
     * important members and methods. This allows for multiple inheritance.
     */
    const { mixin2: mixin2, var1: otherVar1 } = anotherObjFactory({
        example1: 1,
        example2: 2
    });
    /*
     * Extract the values passed in with the object and assign them accordingly.
     *
     * Important to know:
     * There is no way to dynamically set default values without using `this`.
     */
    let { example1: var1, example2: var2 } = spec;

    /*
     * Create all other necessary local variables. Make sure all functions
     * are labeled const.
     */
    let var3;
    let var4;
    let var5;
    const NAME = 'Rorschach';
    
    const addVar3 = function (value) {
        return (value + var3);
    };
    
    /*
     * Pass an object literal into Object.freeze so the resulting
     * object cannot have its inteface modified. This is the
     * object that will be returned from this factory.
     *
     * The object being passed in will contain the variables
     * and methods you wish to make public. Everthing that
     * is not contained in the object literal will be private.
     */
    return Object.freeze({
        var1,
        var2,
        addVar3,
        NAME
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
function anotherObjFactory(spec) {
    let { example1: mixin1, example2: mixin2 } = spec;
    let minxin3;
    let var1 = 1;
    const NAME = 'Bob';
    
    const mixinMethod = function (value) {
        return (value + var3);
    };
    
    return Object.freeze({
        mixin2,
        var1,
        NAME
    });
}


let newObj = objFactory({
    example2: 2,
    example1: 1
});

console.log(newObj.NAME);
