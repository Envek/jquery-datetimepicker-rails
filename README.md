jQuery date and time picker for rails
=====================================

[jQuery Date and Time picker plugin] [plugin] by [@xdan] [author] for Ruby on Rails asset pipeline.

[![Gem Version](https://badge.fury.io/rb/jquery-datetimepicker-rails.png)](http://badge.fury.io/rb/jquery-datetimepicker-rails)

Installation
------------

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
