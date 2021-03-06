import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import Countdown, { CountdownRenderProps } from 'react-countdown'

import { useWallet } from 'use-wallet'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'

import useYam from '../../../hooks/useYam'

import {
  delegate,
  didDelegate,
  getDelegatedBalance,
  getScalingFactor,
  getVotes_piece,
  get_y_n_vote,
  get_counted_votes
} from '../../../yamUtils'

interface VoteProps {
}

const METER_TOTAL = 200000
const Final_count = '100,092.178'
const Final_count_num = 100092.178
const WARNING_TIMESTAMP = 1598000400000

const Voter: React.FC<VoteProps> = () => {
  const [totalVotes, setTotalVotes] = useState(new Number)
  // const [scalingFactor, setScalingFactor] = useState(new BigNumber(1))
  // const [delegated, setDelegated] = useState(false)
  // const [delegatedBalance, setDelegatedBalance] = useState(new BigNumber(0))

  const { account, ethereum } = useWallet()
  const yam = useYam()

  const renderer = (countdownProps: CountdownRenderProps) => {
    const { days, hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const totalhours = days * 24 + hours;
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <StyledCountdown>{totalhours > 24 ? totalhours : paddedHours}:{paddedMinutes}:{paddedSeconds}</StyledCountdown>
    )
  }

  const y_vote = useCallback(() => {
    get_y_n_vote(ethereum, account)
  }, [ethereum, account])

  const fetchVotes = useCallback(async () => {
    getVotes_piece(ethereum).then(function (data) {
      setTotalVotes(data)
    })
  }, [yam, setTotalVotes])

  useEffect(() => {
    if (yam) {
      fetchVotes()
    }
    const refetch = setInterval(fetchVotes, 10000)
    return () => clearInterval(refetch)
  }, [fetchVotes, yam])


  return (
    <Card>
      <CardContent>
        <div style={{ alignItems: 'flex-start', display: 'flex' }}>
          <StyledCenter>
          <StyledDenominator>{`All Time Elapsed`}</StyledDenominator>
            
            {/* {Date.now() > WARNING_TIMESTAMP ? (
              <StyledDenominator>{`< 10 minutes`}</StyledDenominator>
            )
              : (
                <Countdown date={WARNING_TIMESTAMP} renderer={renderer} />
              )} */}
          </StyledCenter>
          <Spacer />
          <StyledCenter>
            <Label text="Votes Placed" />
            <div style={{
              alignItems: 'baseline',
              display: 'flex',
            }}>
              <StyledTitle>
                <div>{Final_count}</div>
              </StyledTitle>
              <StyledDenominator>
                <div>{`/ 229,240.92`}</div>
              </StyledDenominator>
            </div>
            {/* <div style={{
              alignItems: 'baseline',
              display: 'flex',
            }}>
              <div style={{ fontSize: 12 }}>{`${Number(totalVotes.multipliedBy(scalingFactor).toFixed(0)).toLocaleString()}`}</div>
              <div style={{
                  fontSize: 12,
                  marginTop: 4,
                  marginLeft: 4,
                }}>{`/ ${Number(new BigNumber(160000).multipliedBy(scalingFactor).toFixed(0)).toLocaleString()} YAM`}</div>
            </div> */}
            <br />
            <br />
          </StyledCenter>
        </div>
        <Spacer />
        <StyledCheckpoints>
          <StyledCheckpoint left={100000 / METER_TOTAL * 100}>
            <StyledCheckpointText left={-50}>
              <div>Proposal Passed</div>
              <div>100,000</div>
            </StyledCheckpointText>
          </StyledCheckpoint>
        </StyledCheckpoints>
        <StyledMeter>
          <StyledMeterInner width={(100000 / METER_TOTAL * 101)} />
        </StyledMeter>
        <Spacer />
        {Date.now() > WARNING_TIMESTAMP ? (<Button text="Closed" disabled={true} />):(<Button text="I do solemnly swear" onClick={y_vote} />)}
        {/* ) : (
          <div>
            {/* <StyledDelegatedCount>Delegating: {Number(delegatedBalance.multipliedBy(scalingFactor).toFixed(0)).toLocaleString()} YAM</StyledDelegatedCount> 
            <StyledThankYou>Thank you for your vote.</StyledThankYou>
          </div>
        )} */}
        <div style={{
          margin: '0 auto',
          width: 512,
          paddingTop: 24,
          opacity: 0.6,
        }}>
          <p>Proposal 1(Rehearsal Proposal), </p>
          <p>Drug Declaration of Independence!</p>
          <p>I do solemnly swear that I am a drug, and that I know the obligation of drug.<br />
        I will do my best to protect this community, so no others can beat us.<br /><br />

More then that, I will invite other projects to create advanced pools. As I know they need us and we need them.<br /><br />

For I am just one of many drug, who knows they could be eaten in here.<br />
But I will do a serious review of this community, for I am a drug!</p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}>
            <StyledLink target="__blank" href="https://github.com/drug-finance/drug-protocol/wiki/Drug-Declaration-of-Independence">More Info</StyledLink>
          </div>
        </div>
        {/* <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 32,
        }}> */}
        {/* below here is a twitter link, we can place a link
             to a twitter announcement here so i have only commented it out for now  */}
        {/* <StyledLink target="__blank" href="https://twitter.com/YamFinance/status/1293660938906869760">More Info</StyledLink> */}
        {/* </div> */}
      </CardContent>
    </Card>
  )
}

const StyledDelegatedCount = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${props => props.theme.color.grey[600]};
  font-weight: 700;
  margin: 0 auto;
`

const StyledThankYou = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.color.secondary.main};
  text-align: center;
  padding: 0 48px;
`

const StyledDenominator = styled.div`
  margin-left: 8px;
  font-size: 18px;
  color: ${props => props.theme.color.grey[600]};
`

const StyledCountdown = styled.div`
  color: ${props => props.theme.color.primary.main};
  font-size: 32px;
  font-weight: 700;
`

const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
`

const StyledCheckpoints = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
`

/*
          <StyledCheckpoint left={35500 / METER_TOTAL * 100}>
            <StyledCheckpointText left={-48}>
              <div>Target Proposal</div>
              <div>50,000</div>
            </StyledCheckpointText>
          </StyledCheckpoint>
*/

interface StyledCheckpointProps {
  left: number
}

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`
const StyledCheckpoint = styled.div<StyledCheckpointProps>`
  position: absolute;
  left: ${props => props.left}%;
  &:after {
    content: "";
    position: absolute;
    width: 1px;
    background-color: ${props => props.theme.color.grey[400]};
    height: 28px;
    left: 0;
    top: 40px;
  }
`

const StyledCheckpointText = styled.div<StyledCheckpointProps>`
  position: absolute;
  left: ${props => props.left}px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  color: ${props => props.theme.color.grey[600]};
  text-align: center;
`

const StyledMeter = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 12px;
  border-radius: 16px;
  width: 100%;
  background-color: ${props => props.theme.color.grey[300]};
  padding: 2px;
`

interface StyledMeterInnerProps {
  width: number
}
const StyledMeterInner = styled.div<StyledMeterInnerProps>`
  height: 100%;
  background-color: ${props => props.theme.color.secondary.main};
  border-radius: 12px;
  width: ${props => props.width}%;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[600]};
  text-decoration: none;
  font-weight: 700;
`

export default Voter
