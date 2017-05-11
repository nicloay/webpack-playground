
function InternalObject(){
    console.log("internalObject created");
}

InternalObject.prototype = Object.create({});
InternalObject.prototype.constructor = InternalObject;


function ES5Class() {
    console.log(">> ES5Class constructor")
    new InternalObject();
    console.log("---->>> ");
    // console.log(ExternalObject);
    new ExternalObject("ES5!!");
}

ES5Class.prototype = Object.create({});
ES5Class.prototype.constructor = ES5Class;