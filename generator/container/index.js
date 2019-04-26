module.exports = {
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What should it called?'
        },{
            type: 'confirm',
            name: 'wantCSS',
            message: 'Do you want CSS?'
        },{
            type: 'confirm',
            name: 'wantMesaages',
            message: 'Do you want intl-messages?'
        }],
        actions: function(data) {
            var actions = [{
                type: 'add',
                path: '../src/containers/{{camelCase name}}/index.js',
                templateFile: './container/container.hbs'
            }];

            if(data.wantCSS) {
                actions.push({
                    type: 'add',
                    path: '../src/containers/{{camelCase name}}/styles.js',
                    templateFile: './container/style.hbs'
                });
            }
            if(data.wantMesaages) {
                actions.push({
                    type: 'add',
                    path: '../src/containers/{{camelCase name}}/messages.js',
                    templateFile: './container/message.hbs'
                });
            }
            return actions;
        }
    }
