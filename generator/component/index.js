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
                path: '../src/components/{{camelCase name}}/index.js',
                templateFile: './component/component.hbs'
            }];

            if(data.wantCSS) {
                actions.push({
                    type: 'add',
                    path: '../src/components/{{camelCase name}}/styles.js',
                    templateFile: './component/style.hbs'
                });
            }
            if(data.wantMesaages) {
                actions.push({
                    type: 'add',
                    path: '../src/components/{{camelCase name}}/messages.js',
                    templateFile: './component/message.hbs'
                });
            }
            return actions;
        }
    }
