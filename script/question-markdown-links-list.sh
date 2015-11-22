gfind ./leetcode-js/* | awk -F'/' '{print "- ["$3"]("$0")" }'
