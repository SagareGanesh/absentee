Rails.application.routes.draw do
  api_version(:module => "V1", :header => {:name => "Accept", :value => "application/vnd.parenotify.com; version=1"}) do
    resources :schools
    resources :students

  end
end
