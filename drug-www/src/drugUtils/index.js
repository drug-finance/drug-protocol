import { ethers } from 'ethers'
import Web3 from 'web3';
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import ProposalJson from '../yam/clean_build/contracts/Proposal.json';
import newProposalJson from '../yam/clean_build/contracts/newProposal.json';

import AdvancedJson from '../yam/clean_build/contracts/AdvancedPool.json';

// import DOGEFI_UNI from '../yam/clean_build/contracts/Doge_uni.json';
// import DOGEPoolJson from '../yam/clean_build/contracts/DOGEPoolJson.json';

import erc20_abi from '../constants/abi/ERC20.json';
import { yam as yamAddress } from '../constants/tokenAddresses';

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});


const cost_of_eth = 424.28;

// export const current_price_of_dogefi = async (ethereum) => {
//   var tot = 0;
//   const zom = '0x9b9087756eca997c5d595c840263001c9a26646d';
//   const weth = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
//   if (ethereum) {
//     const web3 = new Web3(ethereum);
//     const mine_proposal = new web3.eth.Contract(DOGEPoolJson.abi, weth);
//     await mine_proposal.methods.balanceOf(weth).call().then(function (events) {
//       console.log(events, 'qwerty')
//       tot = web3.utils.fromWei(events, 'ether')
//       console.log(tot * 2 / cost_of_eth)
//     })
//     // return tot
//   }
// }

export const current_zom_value = async (ethereum) => {
  var tot = 0;
  const zom = yamAddress;
  if (ethereum) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(erc20_abi.abi, zom);
    await my_proposal.methods.totalSupply().call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return tot
  }
}

export const log_data = async (ethereum, address, abi) => {
  //first step of wrapped eth
  var tot = 0;
  const weth = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  if (ethereum) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(abi, weth);
    await my_proposal.methods.balanceOf(address).call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return (tot * cost_of_eth * 2)
  }
}

export const log_data2 = async (ethereum, address, abi) => {
  //first step of wrapped eth
  var tot = 0;
  const dai = '0x6b175474e89094c44da98b954eedeac495271d0f'
  if (ethereum) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(abi, dai);
    await my_proposal.methods.balanceOf(address).call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return (tot * 2)
  }
}

export const log_data3 = async (ethereum, address, abi) => {
  //first step of wrapped eth
  var tot = 0;
  const dai = '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e'
  if (ethereum) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(abi, dai);
    await my_proposal.methods.balanceOf(address).call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return (tot * 2)
  }
}

export const log_data4 = async (ethereum, address, abi) => {
  //first step of wrapped eth
  var tot = 0;
  const dai = '0x6b175474e89094c44da98b954eedeac495271d0f'
  if (ethereum) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(abi, dai);
    await my_proposal.methods.balanceOf(address).call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return (tot * 2)
  }
}

export const current_Dai_value = async (ethereum, address) => {
  var tot = 0;
  if (ethereum && address) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(erc20_abi.abi, address);
    await my_proposal.methods.totalSupply().call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return tot
  }
}

export const current_DaiStaked_value = async (ethereum, address) => {
  var tot = 0;
  if (ethereum && address) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(erc20_abi.abi, address);
    await my_proposal.methods.totalSupply().call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return tot
  }
}

export const current_UserDaiStaked_value = async (ethereum, user, address) => {
  var tot = 0;
  if (ethereum && address) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(erc20_abi.abi, address);
    await my_proposal.methods.balanceOf(user).call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return tot
  }
}

export const current_UserDaiEarned_value = async (ethereum, user, address, nowAbi) => {
  var tot = 0;
  if (ethereum && address && nowAbi) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(nowAbi, address);
    await my_proposal.methods.earned(user).call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return tot
  }
}

export const current_DaiAPY = async (ethereum, address, nowAbi) => {
  var tot = 0;
  if (ethereum && address && nowAbi) {
    const web3 = new Web3(ethereum);
    const my_proposal = new web3.eth.Contract(nowAbi, address);
    await my_proposal.methods.rewardRate().call().then(function (events) {
      tot = web3.utils.fromWei(events, 'ether')
    })
    return tot
  }
}

export const getPoolStartTime = async (poolContract) => {
  return await poolContract.methods.starttime().call()
}

export const getPoolEndTime = async (poolContract) => {
  return await poolContract.methods.periodFinish().call()
}

export const stake = async (poolContract, amount, account) => {
  let now = new Date().getTime() / 1000;
  if (now >= 1597172400) {
    return poolContract.methods
      .stake((new BigNumber(amount).times(new BigNumber(10).pow(18))).toString())
      .send({ from: account, gas: 200000 })
      .on('transactionHash', tx => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert("pool not active");
  }
}

export const unstake = async (poolContract, amount, account) => {
  let now = new Date().getTime() / 1000;
  if (now >= 1597172400) {
    return poolContract.methods
      .withdraw((new BigNumber(amount).times(new BigNumber(10).pow(18))).toString())
      .send({ from: account, gas: 200000 })
      .on('transactionHash', tx => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert("pool not active");
  }
}

export const harvest = async (poolContract, account) => {
  let now = new Date().getTime() / 1000;
  if (now >= 1597172400) {
    return poolContract.methods
      .getReward()
      .send({ from: account, gas: 200000 })
      .on('transactionHash', tx => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert("pool not active");
  }
}

export const redeem = async (poolContract, account) => {
  let now = new Date().getTime() / 1000;
  if (now >= 1597172400) {
    return poolContract.methods
      .exit()
      .send({ from: account, gas: 200000 })
      .on('transactionHash', tx => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert("pool not active");
  }
}

export const approve = async (tokenContract, poolContract, account) => {
  return tokenContract.methods
    .approve(poolContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account, gas: 80000 })
}
//after adding more parameters update the id to be a param 
//which is unique to the voting option
export const get_y_n_vote = async (provider, account) => {
  if (provider) {
    const web3 = new Web3(provider);
    const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
    console.log(my_proposal)
    return my_proposal.methods
      .agree_vote(0)
      .send({ from: account })
  }
}
//function for setting the initial value of the votes cast
export const get_counted_votes = async (provider) => {
  var votes_cast = 0;
  if (provider) {
    const web3 = new Web3(provider);
    const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
    let votes = [];
    // past event to get the number of votes cast
    my_proposal.getPastEvents('Voter', {
      fromBlock: 0,
      toBlock: 'latest'
    }, function (error, events) {
      if (error) {
        console.log(error)
      } else {
        console.log(events)
      }
    })
      .then(function (events) {
        //stores the current amount of votes cast into an array

        for (let i = 0; i < events.length; i++) {
          if (events[i].returnValues.id === "0") {
            votes.push(events[i].returnValues.voter)
          }
        }
        my_proposal.methods.get_vote(0, votes).call().then(function (events) {
          votes_cast = web3.utils.fromWei(events, 'ether')
        })
      })
  }
  return votes_cast
}

export const get_y_n_vote2 = async (provider, account) => {
  if (provider) {
    const web3 = new Web3(provider);
    const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
    console.log(my_proposal)
    return my_proposal.methods
      .agree_vote(1)
      .send({ from: account })
  }
}

export const get_y_n_vote3 = async (provider, account) => {
  if (provider) {
    const web3 = new Web3(provider);
    const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
    console.log(my_proposal)
    return my_proposal.methods
      .agree_vote(2)
      .send({ from: account })
  }
}

export const get_y_n_vote4 = async (provider, account) => {
  if (provider) {
    const web3 = new Web3(provider);
    const my_proposal = new web3.eth.Contract(newProposalJson.abi, newProposalJson.networks[1].address);
    console.log(my_proposal)
    return my_proposal.methods
      .agree_vote(0)
      .send({ from: account })
  }
}
// proposal abi call for proposing a new pool or a change to a pool
export const sendProposal = async (provider, proposal, account) => {
  if (provider) {
    const web3 = new Web3(provider);
    const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
    return my_proposal.methods.purpose(proposal).send({ from: account })
  }
}
//message abi call for posting an ad pool
export const sendAdRequest = async (provider, proposal, account) => {
  if (provider) {
    const web3 = new Web3(provider);
    const my_proposal = new web3.eth.Contract(AdvancedJson.abi, AdvancedJson.networks[1].address);
    return my_proposal.methods.set_ad_nodrug(proposal).send({ from: account })
  }
}

export const getPoolContracts = async (yam) => {
  const pools = Object.keys(yam.contracts)
    .filter(c => c.indexOf('_pool') !== -1)
    .reduce((acc, cur) => {
      const newAcc = { ...acc }
      newAcc[cur] = yam.contracts[cur]
      return newAcc
    }, {})
  return pools
}

export const getEarned = async (yam, pool, account) => {
  // const scalingFactor = new BigNumber(await yam.contracts.yam.methods.yamsScalingFactor().call())
  const earned = new BigNumber(await pool.methods.earned(account).call())
  return earned;
}

export const getStaked = async (yam, pool, account) => {
  return yam.toBigN(await pool.methods.balanceOf(account).call())
}

export const getCurrentPrice = async (yam) => {
  // FORBROCK: get current YAM price
  return yam.toBigN(await yam.contracts.rebaser.methods.getCurrentTWAP().call())
}

export const getTargetPrice = async (yam) => {
  return yam.toBigN(1).toFixed(2);
}

export const getCirculatingSupply = async (yam) => {
  let now = await yam.web3.eth.getBlock('latest');
  let scalingFactor = yam.toBigN(await yam.contracts.yam.methods.yamsScalingFactor().call());
  let starttime = yam.toBigN(await yam.contracts.eth_pool.methods.starttime().call()).toNumber();
  let timePassed = now["timestamp"] - starttime;
  if (timePassed < 0) {
    return 0;
  }
  let yamsDistributed = yam.toBigN(8 * timePassed * 250000 / 625000); //yams from first 8 pools
  // let starttimePool2 = yam.toBigN(await yam.contracts.scrv_pool.methods.starttime().call()).toNumber();
  timePassed = now["timestamp"] - starttime;
  let pool2Yams = yam.toBigN(timePassed * 1500000 / 625000); // yams from second pool. note: just accounts for first week
  let circulating = pool2Yams.plus(yamsDistributed).times(scalingFactor).div(10 ** 36).toFixed(2)
  return circulating
}

export const getNextRebaseTimestamp = async (yam) => {
  try {
    let now = await yam.web3.eth.getBlock('latest').then(res => res.timestamp);
    let interval = 43200; // 12 hours
    let offset = 28800; // 8am/8pm utc
    let secondsToRebase = 0;
    if (await yam.contracts.rebaser.methods.rebasingActive().call()) {
      if (now % interval > offset) {
        secondsToRebase = (interval - (now % interval)) + offset;
      } else {
        secondsToRebase = offset - (now % interval);
      }
    } else {
      let twap_init = yam.toBigN(await yam.contracts.rebaser.methods.timeOfTWAPInit().call()).toNumber();
      if (twap_init > 0) {
        let delay = yam.toBigN(await yam.contracts.rebaser.methods.rebaseDelay().call()).toNumber();
        let endTime = twap_init + delay;
        if (endTime % interval > offset) {
          secondsToRebase = (interval - (endTime % interval)) + offset;
        } else {
          secondsToRebase = offset - (endTime % interval);
        }
        return endTime + secondsToRebase;
      } else {
        return now + 13 * 60 * 60; // just know that its greater than 12 hours away
      }
    }
    return secondsToRebase
  } catch (e) {
    console.log(e)
  }
}

export const getTotalSupply = async (yam) => {
  return await yam.contracts.yam.methods.totalSupply().call();
}

export const getStats = async (yam) => {
  const curPrice = await getCurrentPrice(yam)
  const circSupply = await getCirculatingSupply(yam)
  const nextRebase = await getNextRebaseTimestamp(yam)
  const targetPrice = await getTargetPrice(yam)
  const totalSupply = await getTotalSupply(yam)
  return {
    circSupply,
    curPrice,
    nextRebase,
    targetPrice,
    totalSupply
  }
}

export const vote = async (yam, account) => {
  return yam.contracts.gov.methods.castVote(0, true).send({ from: account })
}

export const delegate = async (yam, account) => {
  return yam.contracts.yam.methods.delegate("0x683A78bA1f6b25E29fbBC9Cd1BFA29A51520De84").send({ from: account })
}

export const vote_new_token = async (yam, account) => {
  return yam.contracts.yam.methods.delegate("0x683A78bA1f6b25E29fbBC9Cd1BFA29A51520De84").send({ from: account })
}

export const didDelegate = async (yam, account) => {
  return await yam.contracts.yam.methods.delegates(account).call() === '0x683A78bA1f6b25E29fbBC9Cd1BFA29A51520De84'
}

export const getVotes = async (yam) => {
  const votesRaw = new BigNumber(await yam.contracts.yam.methods.getCurrentVotes("0x683A78bA1f6b25E29fbBC9Cd1BFA29A51520De84").call()).div(10 ** 24)
  return votesRaw
}

export const getVotes_piece = async (provider) => {
  var votes_cast = 0;
  const web3 = new Web3(provider);
  const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
  let votes = [];
  await my_proposal.getPastEvents('Voter', {
    fromBlock: 0,
    toBlock: 'latest'
  }, function (error, events) { }).then(function (events) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].returnValues.id === "0") {
        votes.push(events[i].returnValues.voter)
      }
    }
  });
  await my_proposal.methods.get_vote(0, votes).call().then(function (events) {
    votes_cast = web3.utils.fromWei(events, 'ether')
  })
  return votes_cast
}

export const getVotes_piece2 = async (provider) => {
  var votes_cast = 0;
  const web3 = new Web3(provider);
  const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
  let votes = [];
  await my_proposal.getPastEvents('Voter', {
    fromBlock: 0,
    toBlock: 'latest'
  }, function (error, events) { }).then(function (events) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].returnValues.id === "1") {
        votes.push(events[i].returnValues.voter)
      }
    }
  });
  await my_proposal.methods.get_vote(1, votes).call().then(function (events) {
    votes_cast = web3.utils.fromWei(events, 'ether')
  })
  return votes_cast
}
export const getVotes_piece3 = async (provider) => {
  var votes_cast = 0;
  const web3 = new Web3(provider);
  const my_proposal = new web3.eth.Contract(ProposalJson.abi, ProposalJson.networks[1].address);
  let votes = [];
  await my_proposal.getPastEvents('Voter', {
    fromBlock: 0,
    toBlock: 'latest'
  }, function (error, events) { }).then(function (events) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].returnValues.id === "2") {
        votes.push(events[i].returnValues.voter)
      }
    }
  });
  await my_proposal.methods.get_vote(2, votes).call().then(function (events) {
    votes_cast = web3.utils.fromWei(events, 'ether')
  })
  return votes_cast
}

export const getVotes_piece4 = async (provider) => {
  var votes_cast = 0;
  const web3 = new Web3(provider);
  const my_proposal = new web3.eth.Contract(newProposalJson.abi, newProposalJson.networks[1].address);
  let votes = [];
  await my_proposal.getPastEvents('Voter', {
    fromBlock: 0,
    toBlock: 'latest'
  }, function (error, events) { }).then(function (events) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].returnValues.id === "0") {
        votes.push(events[i].returnValues.voter)
      }
    }
  });
  await my_proposal.methods.get_vote(0, votes).call().then(function (events) {
    votes_cast = web3.utils.fromWei(events, 'ether')
  })
  return votes_cast
}

export const getScalingFactor = async (yam) => {
  return new BigNumber(await yam.contracts.yam.methods.yamsScalingFactor().call()).dividedBy(new BigNumber(10).pow(18))
}

export const getDelegatedBalance = async (yam, account) => {
  return new BigNumber(await yam.contracts.yam.methods.balanceOfUnderlying(account).call()).div(10 ** 24)
}
