function inheritsFrom(child, parent)
{
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};