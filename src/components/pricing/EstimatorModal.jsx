import React, { useState } from 'react';
import Modal from '../common/Modal';
import { calculatorOptions } from '../../data/pricingData';
import { Calculator, Check, ArrowRight, Sparkles, Clock, DollarSign } from 'lucide-react';

export default function EstimatorModal({ isOpen, onClose, onSubmitEstimate }) {
  const [projectType, setProjectType] = useState(calculatorOptions.projectTypes[1].id);
  const [scope, setScope] = useState(calculatorOptions.scopes[1].id);
  const [speed, setSpeed] = useState(calculatorOptions.speeds[0].id);
  const [selectedAddons, setSelectedAddons] = useState(['ai_bot']);

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Calculate pricing
  const currentProjectType = calculatorOptions.projectTypes.find(p => p.id === projectType) || calculatorOptions.projectTypes[0];
  const currentScope = calculatorOptions.scopes.find(s => s.id === scope) || calculatorOptions.scopes[0];
  const currentSpeed = calculatorOptions.speeds.find(sp => sp.id === speed) || calculatorOptions.speeds[0];

  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const item = calculatorOptions.addons.find(a => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const baseCalculated = Math.round(currentProjectType.basePrice * currentScope.multiplier);
  const estimatedMin = baseCalculated + currentSpeed.fee + addonsTotal;
  const estimatedMax = Math.round(estimatedMin * 1.25);

  const handleApplyToContact = () => {
    const estimateDetails = {
      projectType: currentProjectType.label,
      scope: currentScope.label,
      speed: currentSpeed.label,
      addons: selectedAddons.map(id => calculatorOptions.addons.find(a => a.id === id)?.label).filter(Boolean),
      priceRange: `$${estimatedMin.toLocaleString()} – $${estimatedMax.toLocaleString()}`,
      timeline: currentProjectType.timeline
    };
    onClose();
    onSubmitEstimate(estimateDetails);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Instant Project Cost & Scope Estimator"
      subtitle="Interactive Agency Calculator"
      maxWidth="820px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {/* Step 1: Project Type */}
        <div>
          <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'block' }}>
            1. Select Project Archetype
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.6rem' }}>
            {calculatorOptions.projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setProjectType(type.id)}
                style={{
                  textAlign: 'left',
                  padding: '0.9rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: projectType === type.id ? 'rgba(34, 211, 238, 0.12)' : 'var(--bg-surface-elevated)',
                  border: projectType === type.id ? '1px solid var(--cyan-light)' : '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: projectType === type.id ? 'var(--blue-vivid)' : 'var(--text-primary)' }}>
                  {type.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Starting from ${type.basePrice.toLocaleString()} · ~{type.timeline}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Scope Level */}
        <div>
          <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'block' }}>
            2. Scope & Complexity Tier
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 90px), 1fr))', gap: '0.6rem' }}>
            {calculatorOptions.scopes.map((sc) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => setScope(sc.id)}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: scope === sc.id ? 'rgba(47, 91, 255, 0.15)' : 'var(--bg-surface-elevated)',
                  border: scope === sc.id ? '1px solid var(--blue-vivid)' : '1px solid var(--border-color)',
                  color: scope === sc.id ? 'var(--blue-vivid)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textAlign: 'center'
                }}
              >
                {sc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Speed & Add-ons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem' }}>
          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'block' }}>
              3. Delivery Velocity
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {calculatorOptions.speeds.map((sp) => (
                <button
                  key={sp.id}
                  type="button"
                  onClick={() => setSpeed(sp.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: speed === sp.id ? 'rgba(34, 211, 238, 0.1)' : 'var(--bg-surface-elevated)',
                    border: speed === sp.id ? '1px solid var(--cyan-light)' : '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ color: speed === sp.id ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: 500 }}>
                    {sp.label}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--cyan-light)', fontWeight: 600 }}>
                    {sp.fee === 0 ? 'Standard' : `+$${sp.fee}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'block' }}>
              4. Optional High-Impact Add-ons
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {calculatorOptions.addons.map((add) => {
                const isSelected = selectedAddons.includes(add.id);
                return (
                  <button
                    key={add.id}
                    type="button"
                    onClick={() => toggleAddon(add.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-surface-elevated)',
                      border: isSelected ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-color)',
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div 
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '4px',
                          background: isSelected ? '#10b981' : 'transparent',
                          border: isSelected ? 'none' : '1px solid var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {isSelected && <Check size={12} color="#ffffff" />}
                      </div>
                      <span style={{ color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {add.label}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                      +${add.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calculation Result Box */}
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.12) 0%, rgba(47, 91, 255, 0.15) 100%)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--blue-vivid)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Estimated Investment Range
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1, marginTop: '0.25rem' }}>
              ${estimatedMin.toLocaleString()} – ${estimatedMax.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
              Expected Delivery: <strong style={{ color: 'var(--text-primary)' }}>{currentProjectType.timeline}</strong> · Fixed-Scope Sprint
            </div>
          </div>

          <button 
            type="button"
            onClick={handleApplyToContact}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.8rem', flex: '1 1 auto', justifyContent: 'center' }}
          >
            <span>Lock Estimate & Request Proposal</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Modal>
  );
}
