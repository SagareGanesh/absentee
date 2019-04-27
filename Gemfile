source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
# Use Puma as the app server
gem 'puma', '~> 3.11'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'devise'
gem 'jwt'
gem 'apitome'
#gem 'raddocs'
gem 'versionist'
gem 'rack-cors', :require => 'rack/cors'

group :development, :test do
  gem "rspec_api_documentation"
  gem "rspec-rails"
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'factory_bot'
  gem 'faker'
  gem 'simplecov', require: false
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  #gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'pg'
