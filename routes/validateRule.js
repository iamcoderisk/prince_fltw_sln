var express = require('express');
var router = express.Router();
router.post('/', (req, res) => {
    if (req.body.constructor === {}.constructor) {
        
        const conditions = ['eq', 'gte', 'neq', 'contains']
        var rules = req.body.rule
        var datas = req.body.data
        let rules_type = typeof rules
        let datas_type = typeof datas 
        if (!Object.prototype.hasOwnProperty.call(req.body,'rule')) {
                return res.status(400).send({
                    "message": "rule field is required",
                    "status": "error",
                    "data":null
                })
            } else if (!Object.prototype.hasOwnProperty.call(req.body,'data')) {
                return res.status(400).send({
                    "message": "data field is required",
                    "status": "error",
                    "data":null
                })
                
            } else {
                if (rules_type !== 'object') {
                    return res.status(400).send({
                    "message": "rule should be an object.",
                    "status": "error",
                    "data":null
                })

            }
            if (datas_type !== 'string' && datas_type !== 'object'
                    && datas_type !== 'array') {
                    return res.status(400).send({
                    "message": typeof datas_type,
                    "status": "error",
                    "data":null
                    })
                    
                } else { 
                if (req.body.data.constructor === {}.constructor || 
                    req.body.data.constructor === [].constructor || datas_type=='string') {
                                
                    if (!Object.prototype.hasOwnProperty.call(req.body.data, 'age') && 
                        req.body.data.constructor === {}.constructor || 
                    Object.prototype.hasOwnProperty.call(req.body.data, 'age') && 
                        req.body.data.constructor === [].constructor
                        ) {
                       return  res.status(400).send({
                            "message": "field age is missing from data.",
                            "status": "error",
                            "data": null
                        })
                    } else if (
                        !Object.prototype.hasOwnProperty.call(req.body.data, 'name') && 
                        req.body.data.constructor === {}.constructor || 
                    Object.prototype.hasOwnProperty.call(req.body.data, 'name') && 
                        req.body.data.constructor === [].constructor
                    ) {
                        return res.status(400).send({
                            "message": "field name is missing from data.",
                            "status": "error",
                            "data": null
                        })
                    } else if (
                        !Object.prototype.hasOwnProperty.call(req.body.data, 'crew') && 
                        req.body.data.constructor === {}.constructor || 
                    Object.prototype.hasOwnProperty.call(req.body.data, 'crew') && 
                        req.body.data.constructor === [].constructor
                    ) {
                        return res.status(400).send({
                            "message": "field crew is missing from data.",
                            "status": "error",
                            "data": null
                        })
                    } else if (
                        !Object.prototype.hasOwnProperty.call(req.body.data, 'position') && 
                        req.body.data.constructor === {}.constructor || 
                    Object.prototype.hasOwnProperty.call(req.body.data, 'position') && 
                        req.body.data.constructor === [].constructor
                    ) {
                        return res.status(400).send({
                            "message": "field position is missing from data.",
                            "status": "error",
                            "data": null
                        })
                    } else if (
                        !Object.prototype.hasOwnProperty.call(req.body.data, 'missions') && 
                        req.body.data.constructor === {}.constructor || 
                    Object.prototype.hasOwnProperty.call(req.body.data, 'missions') && 
                        req.body.data.constructor === [].constructor
                    ) {
                        return res.status(400).send({
                            "message": "field missions is missing from data.",
                            "status": "error",
                            "data": null
                        })
                        
                    } else {
                        if (conditions.includes(rules.condition)) {
                            let rule_field = req.body.rule.field
                            let condition_value = req.body.rule.condition_value
                            let condition_rule =  req.body.rule.conditions
                            let rule_cond_value = req.body.rule.condition_value
                            
                                if (datas_type == 'string') {
                                    
                                    return res.status(400).send({
                                        "message": "field " + rule_field + " failed validation.",
                                        "status": "error",
                                        "data": {
                                            "validation": {
                                                "error": true,
                                                "field": req.body.rule.field,
                                                "field_value": "d",
                                                "condition": req.body.rule.condition,
                                                "condition_value": condition_value
                                            }
                                        }
                                    })
                                } else if (req.body.data.constructor == {}.constructor){
                                    let missions = req.body.data.missions 
                                    //check if missions is an object 
                                    return res.status(200).send({
                                        "message": "field "+req.body.rule.field+" successfully validated.",
                                            "status": "success",
                                            "data": {
                                                "validation": {
                                                "error": false,
                                                "field": req.body.rule.field,
                                                "field_value": req.body.data.count,
                                                "condition": req.body.rule.condition,
                                                "condition_value": req.body.rule.condition_value
                                                }
                                            }
                                    })

                                }else if(req.body.data.constructor ==[].constructor){
                                    let missing_field =  req.body.rule.field 
                                            return res.status(400).send({ 
                                                "message": "field " + missing_field +"  is missing from data.",
                                                "status": "error",
                                                    "data": null
                                                })
                                    }
                        } else { 
                             return res.status(400).send({
                            "message": "condition " + req.body.rule.condition + " is missing from rule",
                            "status": "error",
                            "rule":null
                        })
                            
                        }
                    }
    
                } else { 
                     return res.status(400).send({
                            "message": "condition " + req.body.rule.condition + " is missing from rule",
                            "status": "error",
                            "rule":null
                        })
                }
            }
         
        }
        
    } else {
        res.status(400).send({ 
            "message": "Invalid JSON payload passed.",
            "status": "error",
            "data": null
        })
    }

    
    
    
    
    
})



module.exports = router;
