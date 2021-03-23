

module.exports = {
    mongooseToObject(components){
        if(Array.isArray(components)){
            return components.map(component => component.toObject())
        }
        return components ? components.toObject() : components
    }
}