#!/usr/bin/ruby
def remove(a,b)
@ab1 = b
@ab = a
puts "Enter the String"
str = gets  

new_str = str.gsub(/[#{@ab1}#{@ab}]/, '')
puts new_str
end
puts "Enter characters to remove from string"
c = gets
d = gets
remove("#{c}","#{d}")
