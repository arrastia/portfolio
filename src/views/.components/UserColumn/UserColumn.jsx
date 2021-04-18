import { Gi3DHammer, GiAbstract079, GiAbstract033 } from 'react-icons/gi';

import { Styles } from './UserColumn.styles';
import logo from 'assets/img/logo.svg';

import { Button } from 'views/.components/Button';

export const UserColumn = () => {
  const sections = [
    { id: 0, name: 'Section1', icon: <Gi3DHammer /> },
    { id: 1, name: 'Section2', icon: <GiAbstract079 /> }
  ];

  return (
    <Styles.Dashboard>
      <Styles.User>
        <Styles.Image src={logo} />
        <Styles.Title>Pablo Arrastia</Styles.Title>
        <Styles.Subtitle>Pablo Arrastia</Styles.Subtitle>
      </Styles.User>
      {sections.map(section => (
        <Styles.Link key={section.id}>
          {section.icon}
          <h2>{section.name}</h2>
        </Styles.Link>
      ))}

      <Button icon={<GiAbstract033 />} label={'adshfs'} />
    </Styles.Dashboard>
  );
};
