// carry and sum logic
const carryAndSum = (req, res) => {
  let {a, b} = req.body;
  let len_a = a.length, len_b = b.length;
  let result = [];
  let carry_bag = [];
  let sum_bag = []; 
  let carry = 0;
  let count = 0;

    while (len_a != 0 || len_b != 0)
        {
          let x = 0, y = 0;
          if (len_a > 0)
          {
              x = a[len_a - 1] - 0;
              len_a--;
          }
          if (len_b > 0)
          {
              y = b[len_b - 1] - 0;
              len_b--;
          }
          let sum = x + y + carry;
          sum = sum.toString();
          sum_bag.unshift(sum[sum.length-1]);
          if (sum >= 10)
          {
              if(len_a !== 0 || len_b !== 0)
              {
                carry = 1;
                carry_bag.unshift(carry);
              }
              else
              {
                carry = 1;
                sum_bag.unshift(carry);
              }
          }
          else
          {
            if(len_a !== 0 || len_b !== 0)
            {
              carry = 0;
              carry_bag.unshift(carry);
            }
          }
          count++;

          let ans = {
            step: {"carryString": carry_bag.join("") + "_", "sumString": sum_bag.join('')},
            count
          }
          result.push(ans)
      }
      console.log(result);
    res.json(result);
};

module.exports = { carryAndSum };
