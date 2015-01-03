###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

sprockets.append_path File.join root, 'bower_components'

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
 configure :development do
   activate :livereload
 end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :url_root, 'http://savvyshots.photography'

activate :asset_host
set :asset_host, 'http://localhost:4567'

activate :search_engine_sitemap

activate :automatic_clowncar,
  :sizes => {
    :small => 200,
    :medium => 800,
    :large => 1200
  },
  :namespace_directory => %w(photos),
  :filetypes => [:jpg, :jpeg, :png]

set :haml, { :ugly => true, :format => :html5 }

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  set :asset_host, 'http://savvyshots.photography'

  ignore 'images/webify'

  # Enable cache buster
  activate :asset_hash do |opts|
    opts.exts << '.woff2'
  end

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.build_before = true # default: false
  deploy.method = :git
  # Optional Settings
  # deploy.remote = "custom-remote" # remote name or git url, default: origin
  # deploy.branch = "custom-branch" # default: gh-pages
end
