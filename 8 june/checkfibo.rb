#!/usr/bin/ruby

puts "HOW MANY NUMBERS TO CHECK"
n = gets.chomp().to_i
puts "ENTER NUMBERS TO BE CHECKED"
x = gets.split.map{|w| w.to_i}
a = 0
b = 1
c = 0
for i in 0..n-1
while c < x[i] do
a = b
b = c
c = a + b
end
if c == x[i]
puts "YES"
else 
puts "NO"

end
end






