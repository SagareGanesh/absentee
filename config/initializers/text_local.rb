TEXT_LOCAL_API_KEY = YAML.load_file(Rails.root.join('config/text_local_api.yml'))[Rails.env]['api_key']
TEXT_LOCAL_HOST = YAML.load_file(Rails.root.join('config/text_local_api.yml'))[Rails.env]['url']