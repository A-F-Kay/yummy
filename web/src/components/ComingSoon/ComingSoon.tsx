import { EuiButton, EuiConfirmModal, EuiEmptyPrompt, EuiLink, EuiLoadingChart, EuiLoadingLogo, EuiSpacer } from '@elastic/eui';
import React, { useState } from 'react';

type Props = {
  featureName?: string;
};

export const ComingSoon = ({ featureName }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <EuiEmptyPrompt
        title={<h1>{featureName && `${featureName} - `}Coming soon</h1>}
        titleSize='l'
        body={
          <div>
            <EuiSpacer />
            <EuiLoadingLogo logo='searchProfilerApp' size='xl' />
            <EuiSpacer />
            <p>
            This feature is under development. Please be patient and come back later :)
            </p>
            <p>Thanks for your understanding.</p>
          </div>
        }
        actions={
          <EuiButton size='s' color='primary' fill onClick={openModal}>
            Contact us
          </EuiButton>
        }
      />
      {isModalVisible && (
        <EuiConfirmModal
          title='Contact us'
          onConfirm={closeModal}
          onCancel={closeModal}
          cancelButtonText='Cancel'
          confirmButtonText='Send'
          confirmButtonDisabled
        >
          <p>We&apos;re sorry but even contact form still not ready yet :(</p>
          <p></p>
          <p>Please contact me on Telegram - <EuiLink href="//t.me/a_f_kay" target='_blank'>@a_f_kay</EuiLink></p>
          <EuiLoadingChart size="xl" />
        </EuiConfirmModal>
      )}
    </>
  );
};
