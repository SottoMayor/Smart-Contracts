import React from 'react'
import { Menu } from 'semantic-ui-react';
import Link from 'next/link'

const Header = () => {
  return (
    <Menu style={{'marginTop': '10px'}}>
        <Link href='/'
          name='crowncoin'
        >
          <a className='item'>
            CrownCoin
          </a>
        </Link>

        <Menu.Menu 
          position='right'
        >
           <Link href='/'
          name='campaigns'
        >
          <a className='item'>
            Campaigns
          </a>
        </Link>

        <Link href='/campaigns/new'
          name='newCampaign'
        >
          <a className='item'>
            +
          </a>
        </Link>
          
        </Menu.Menu>

    </Menu>
  )
}

export default Header