export default function validate(schema){
    return function(req, res, next) {
        const data = {
            ...req.body,
            ...req.params,
        };

        const valid = schema.validate(data);
        
        if(valid.error)
            res.status(400).json({
                success: false,
                message: 'Validation error'
            });
        else next();
    }
}