import myfitnesspal
import json

client = myfitnesspal.Client('michaelrsullivan1')

daysList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

print '['

for x in daysList:
    day = client.get_date(2018, 7, x)
    print json.dumps(day.totals)

    if x != 30:
        print ','


print ']'
