#!/usr/bin/ruby

puts "Enter no of terms in fibonacci series"
n = gets
a = -1
b = 1
puts "fibonacci series"
(0..Integer(n)-1).each do |i|
c = a + b
a = b
b = c
print " "
print c
end
print "\n"


