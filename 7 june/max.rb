#!/usr/bin/ruby
puts "Enter String"
str = gets
result = str.split.max_by{|w| w.chars.sort.chunk{|e| e}.map{|e| e.last.length}.max}
puts result
