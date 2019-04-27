Rails.application.routes.draw do
  api_version(:module => "V1", :header => {:name => "Accept", :value => "application/vnd.parenotify.com; version=1"}) do

    resources :schools do
      collection do
        get :details
      end
    end

    resources :students do
      collection do
        post :upload
      end
    end

    resources :attendance do
      collection do
        post :submit
      end
    end

  end
end
