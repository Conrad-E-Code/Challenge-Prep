def search_insert nums, target
    idx = 0
    while idx < nums.length && target > nums[idx]
        idx += 1
    end
    idx
end




puts search_insert([1,2,3,4], 5)


# Get the first index so we can start from the beginning
#compare our target with the first number
# if the number is equal to return index of number OR
#  if the target is greater than the first number check the next number
#     USE_CURRENT_IDX as return
#     get the array length and use while loop
#     end
# return


# prepend before first number else
