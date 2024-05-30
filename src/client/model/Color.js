/**
 * Luna Paint API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Color model module.
 * @module model/Color
 * @version 0.1.0
 */
class Color {
    /**
     * Constructs a new <code>Color</code>.
     * @alias module:model/Color
     * @param id {String} 
     * @param parentId {String} 
     * @param code {String} 
     * @param name {String} 
     * @param brand {String} 
     * @param fullBrand {String} 
     * @param type {Number} 
     */
    constructor(id, parentId, code, name, brand, fullBrand, type) { 
        
        Color.initialize(this, id, parentId, code, name, brand, fullBrand, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, parentId, code, name, brand, fullBrand, type) { 
        obj['id'] = id;
        obj['parentId'] = parentId;
        obj['code'] = code;
        obj['name'] = name;
        obj['brand'] = brand;
        obj['fullBrand'] = fullBrand;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Color</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Color} obj Optional instance to populate.
     * @return {module:model/Color} The populated <code>Color</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Color();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('fullBrand')) {
                obj['fullBrand'] = ApiClient.convertToType(data['fullBrand'], 'String');
            }
            if (data.hasOwnProperty('refBrand')) {
                obj['refBrand'] = ApiClient.convertToType(data['refBrand'], 'String');
            }
            if (data.hasOwnProperty('refBrand2')) {
                obj['refBrand2'] = ApiClient.convertToType(data['refBrand2'], 'String');
            }
            if (data.hasOwnProperty('refCode')) {
                obj['refCode'] = ApiClient.convertToType(data['refCode'], 'String');
            }
            if (data.hasOwnProperty('refCode2')) {
                obj['refCode2'] = ApiClient.convertToType(data['refCode2'], 'String');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Color</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Color</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Color.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['parentId'] && !(typeof data['parentId'] === 'string' || data['parentId'] instanceof String)) {
            throw new Error("Expected the field `parentId` to be a primitive type in the JSON string but got " + data['parentId']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is a string
        if (data['fullBrand'] && !(typeof data['fullBrand'] === 'string' || data['fullBrand'] instanceof String)) {
            throw new Error("Expected the field `fullBrand` to be a primitive type in the JSON string but got " + data['fullBrand']);
        }
        // ensure the json data is a string
        if (data['refBrand'] && !(typeof data['refBrand'] === 'string' || data['refBrand'] instanceof String)) {
            throw new Error("Expected the field `refBrand` to be a primitive type in the JSON string but got " + data['refBrand']);
        }
        // ensure the json data is a string
        if (data['refBrand2'] && !(typeof data['refBrand2'] === 'string' || data['refBrand2'] instanceof String)) {
            throw new Error("Expected the field `refBrand2` to be a primitive type in the JSON string but got " + data['refBrand2']);
        }
        // ensure the json data is a string
        if (data['refCode'] && !(typeof data['refCode'] === 'string' || data['refCode'] instanceof String)) {
            throw new Error("Expected the field `refCode` to be a primitive type in the JSON string but got " + data['refCode']);
        }
        // ensure the json data is a string
        if (data['refCode2'] && !(typeof data['refCode2'] === 'string' || data['refCode2'] instanceof String)) {
            throw new Error("Expected the field `refCode2` to be a primitive type in the JSON string but got " + data['refCode2']);
        }
        // ensure the json data is a string
        if (data['year'] && !(typeof data['year'] === 'string' || data['year'] instanceof String)) {
            throw new Error("Expected the field `year` to be a primitive type in the JSON string but got " + data['year']);
        }

        return true;
    }


}

Color.RequiredProperties = ["id", "parentId", "code", "name", "brand", "fullBrand", "type"];

/**
 * @member {String} id
 */
Color.prototype['id'] = undefined;

/**
 * @member {String} parentId
 */
Color.prototype['parentId'] = undefined;

/**
 * @member {String} code
 */
Color.prototype['code'] = undefined;

/**
 * @member {String} name
 */
Color.prototype['name'] = undefined;

/**
 * @member {String} brand
 */
Color.prototype['brand'] = undefined;

/**
 * @member {String} fullBrand
 */
Color.prototype['fullBrand'] = undefined;

/**
 * @member {String} refBrand
 * @default ''
 */
Color.prototype['refBrand'] = '';

/**
 * @member {String} refBrand2
 * @default ''
 */
Color.prototype['refBrand2'] = '';

/**
 * @member {String} refCode
 * @default ''
 */
Color.prototype['refCode'] = '';

/**
 * @member {String} refCode2
 * @default ''
 */
Color.prototype['refCode2'] = '';

/**
 * @member {String} year
 * @default ''
 */
Color.prototype['year'] = '';

/**
 * @member {Number} type
 */
Color.prototype['type'] = undefined;






export default Color;
