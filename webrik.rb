#!/usr/bin/env ruby
require 'rubygems'
require 'webrick'

server = WEBrick::HTTPServer.new( {:Port => 8012,
                                  :DocumentRoot    =>    '.',
                                  :FancyIndexing   =>    true}
)
trap "INT" do server.shutdown end
server.start
