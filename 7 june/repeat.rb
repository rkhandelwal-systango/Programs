#!/usr/bin/ruby
arr = ["a","b","c","d"]
arr1 = []
n = gets
for i in 0..arr.length-1
   for j in 0..Integer(n)-1
     arr1[j+Integer(n)*i] = arr[i]
   end
end
print arr1

