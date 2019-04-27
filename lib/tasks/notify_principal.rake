namespace :notify_principal do
  task :principal => :environment do
    School.all.each do |school|
      school.notify_principle
    end
  end
end