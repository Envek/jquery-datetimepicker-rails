jQuery date and time picker for rails
=====================================

[jQuery Date and Time picker plugin] [plugin] by [@xdan] [author] for Ruby on Rails asset pipeline.

[![Gem Version](https://badge.fury.io/rb/jquery-datetimepicker-rails.png)](http://badge.fury.io/rb/jquery-datetimepicker-rails)

**THIS GEM IS NO MORE MAINTAINED!** Using [Rails Assets] to install this library instead is _strongly_ encouraged and recommended!

Rails Assets is much better in publishing JS libraries as gems for rails asset pipeline and keeping them up to date than me. So, use it and be happy!


Installation of plugin from [Bower] via [Rails Assets]
------------------------------------------------------

Just do the three simple steps:

 1. Add this to your `Gemfile`

    ```ruby
    source 'https://rails-assets.org' do
      gem 'rails-assets-datetimepicker'
    end
    ```

 2. Add this line to `app/assets/stylesheets/application.css`:

        *= require datetimepicker

    And this line to `app/assets/javascripts/application.js`:

        //= require datetimepicker

 3. Enjoy with [documentation]

    ```javascript
    $('.datetimepicker').datetimepicker();
    ```


Upgrading from Rubygems gem release to Rails Assets gem release
---------------------------------------------------------------

 1. Remove from `Gemfile` string `gem 'jquery-datetimepicker-rails'`
 2. Remove `require jquery.datetimepicker` from your asset manifests.
 3. Follow installation instructions above.


Installation of this gem from RubyGems (discouraged)
----------------------------------------------------

**THIS GEM IS NO MORE MAINTAINED!** E.g. no updates of upstream.

Add this line to your application's Gemfile:

    gem 'jquery-datetimepicker-rails'

And then execute:

    $ bundle

Add this line to `app/assets/stylesheets/application.css`:

    *= require jquery.datetimepicker

Add this line to `app/assets/javascripts/application.js`:

    //= require jquery.datetimepicker

You can autoinitialize datetime picker on page load for elements with class `datetimepicker` by also adding to js manifest:

    //= require jquery.datetimepicker/init

Usage
-----

    $('.datetimepicker').datetimepicker();

See the official [documentation] for examples and options.

Contributing
------------

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

### Version policy

This gem version number is in form of **X.Y.Z.P**, where **X.Y.Z** is a version of original [plugin] and **P** is a gem-specific patch level.

[plugin]: https://github.com/xdan/datetimepicker
[author]: https://github.com/xdan
[documentation]: http://xdsoft.net/jqplugins/datetimepicker/ "Official site docs"
[Rails Assets]: https://rails-assets.org/
[Bower]: http://bower.io/
