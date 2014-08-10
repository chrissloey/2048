require 'mina/git'

# Basic settings:
#   domain       - The hostname to SSH to.
#   deploy_to    - Path to deploy into.
#   repository   - Git repo to clone from. (needed by mina/git)
#   branch       - Branch name to deploy. (needed by mina/git)

set :domain, '104.131.211.127'
set :deploy_to, '/var/www/lol2048.com'
set :repository, 'git@github.com:chrissloey/LoL-2048.git'
set :branch, 'deploy'
set :user, 'deploy'    # Username in the server to SSH to.

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'

    to :launch do
      queue "sudo service nginx restart"
    end
  end
end

# For help in making your deploy script, see the Mina documentation:
#
#  - http://nadarei.co/mina
#  - http://nadarei.co/mina/tasks
#  - http://nadarei.co/mina/settings
#  - http://nadarei.co/mina/helpers

