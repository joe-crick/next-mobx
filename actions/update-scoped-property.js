import {action} from 'mobx';

/**
 * Returns whether or not the property provided is the containing object of the property being modified
 * @param props
 * @param idx
 * @return {boolean}
 */
function isPropsContainingObject(props, idx) {
  return (props.length - 1) === idx;
}

/**
 * Given an object, a scoped property, and a value will update the property on the object
 * @param object
 * @param scopedProperty
 * @param value
 */
export default action(function updateScopedProperty(object, scopedProperty, value) {
  scopedProperty.split('.').reduce((prev, cur, idx, props) => {
    if(isPropsContainingObject(props, idx)) {
      prev[cur] = value
    }
    return prev[cur]
  }, object);
})