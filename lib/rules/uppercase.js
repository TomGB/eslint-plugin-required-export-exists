module.exports = {
    create: context => {
        return {
            VariableDeclaration: node => {
                if (node.type === 'VariableDeclaration') {
                    node.declarations.forEach(dec => {
                        const {init, type, id} = dec;

                        if (
                            type === 'VariableDeclarator'
                            && init.type === 'CallExpression'
                            && init.callee.name === 'require'
                            && init.callee.type === 'Identifier'
                        ) {
                            const requireFileName = init.arguments[0].value;
                            console.log('required file:', requireFileName);

                            if (id.type === 'ObjectPattern') {
                                id.properties.forEach(property => {
                                    if (property.type === 'Property' && property.key.type === 'Identifier') {
                                        console.log(property.key.name);
                                    }
                                });
                            }
                        }
                    });
                    const GOOD = true;

                    if (GOOD) {
                        context.report(node, 'does this var exist');
                    }
                }
            }
        };
    }
};
